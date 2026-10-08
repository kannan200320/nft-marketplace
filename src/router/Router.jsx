import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  path: '/',
  navigate: () => {}
});

export const useRouter = () => useContext(RouterContext);

export const Router = ({ children }) => {
  const getInitialPath = () => {
    if (window.location.hash) {
      const hashPath = window.location.hash.replace(/^#/, '');
      return hashPath || '/';
    }
    return window.location.pathname || '/';
  };

  const [path, setPath] = useState(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash) {
        setPath(window.location.hash.replace(/^#/, '') || '/');
      } else {
        setPath(window.location.pathname || '/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (to) => {
    try {
      window.history.pushState(null, '', to);
    } catch {
      window.location.hash = to;
    }
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useNavigate = () => {
  const { navigate } = useRouter();
  return navigate;
};

export const useLocation = () => {
  const { path } = useRouter();
  return { pathname: path };
};

export const NavLink = ({ to, children, className = '', onClick }) => {
  const { path, navigate } = useRouter();
  const isActive = path === to || (to !== '/' && path.startsWith(to));

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    if (onClick) onClick(e);
  };

  const computedClassName = typeof className === 'function' ? className({ isActive }) : `${className} ${isActive ? 'active' : ''}`;

  return (
    <a href={to} onClick={handleClick} className={computedClassName}>
      {typeof children === 'function' ? children({ isActive }) : children}
    </a>
  );
};

export const Link = ({ to, children, className = '', onClick, title }) => {
  const { navigate } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
    if (onClick) onClick(e);
  };

  return (
    <a href={to} onClick={handleClick} className={className} title={title}>
      {children}
    </a>
  );
};

export const Routes = ({ children }) => {
  const { path } = useRouter();
  let match = null;

  React.Children.forEach(children, child => {
    if (!match && React.isValidElement(child)) {
      const routePath = child.props.path;
      if (routePath === path || (routePath === '/' && (path === '' || path === '/'))) {
        match = child.props.element;
      }
    }
  });

  return match || null;
};

export const Route = ({ path, element }) => null;
