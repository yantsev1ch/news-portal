import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { JSX, useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRole } from '@/entities/User';

import { getRouteForbidden, getRouteMain } from '@/shared/const/router';

interface RequireRolesProps {
  children: JSX.Element;
  roles?: UserRole[];
}

export function RequireAuth({ roles, children }: RequireRolesProps) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }
    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return (
      <Navigate to={getRouteForbidden()} state={{ from: location }} replace />
    );
  }

  return children;
}
