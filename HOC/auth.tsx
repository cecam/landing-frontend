'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = <P extends object>(
    WrappedComponent: React.ComponentType<P>,
    redirectTo = '/login'
): React.ComponentType<P> => {
    const ComponentWithAuth: React.FC<P> = (props) => {
        const router = useRouter();
        
        useEffect(() => {
            const checkAuth = () => {
              let user = localStorage.getItem('user');
              user = JSON.parse(user ?? '')              
      
              if (!user) {
                router.replace(redirectTo);
              }
            };
      
            checkAuth();
          }, []);
    
        return <WrappedComponent {...props} />;
    };
  
    ComponentWithAuth.displayName = `withAuth(${getDisplayName(WrappedComponent)})`;
  
    return ComponentWithAuth;
};
  
export default withAuth;
  
  // Función auxiliar para obtener el nombre de visualización del componente
const getDisplayName = (component: React.ComponentType<any>) => {
    return component.displayName || component.name || 'Component';
};
