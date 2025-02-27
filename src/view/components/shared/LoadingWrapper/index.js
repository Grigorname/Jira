import { Spin } from 'antd';
import'./index.css';

const LoadingWrapper = ({ children, loading, fullScreen }) => {
    if (loading) {
        return (
            <div className={fullScreen ? 'full_screen_container' : ''}>
                <Spin size='large' />
            </div>
        )
    }

    return children
};

export default LoadingWrapper;