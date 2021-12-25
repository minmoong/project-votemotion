import { useNavigate } from "react-router-dom";

function withNavigation(Component: any) {
    return function WrappedComponent(props: any) {
        const navigation = useNavigate();
        
        return <Component { ...props } navigation={ navigation } />;
    };
}

export default withNavigation;