
interface StatusIndicatorProps {
    status: 'loading' | 'success' | 'error';
    children?: React.ReactNode;
}

const getStatusDom = (status: string) => {
    switch (status) {
        case 'loading':
            return <div className="status-indicator loading">Loading...</div>;
        case 'success':
            return <div className="status-indicator success">Success!</div>;
        case 'error':
            return <div className="status-indicator error">Error!</div>;
        default:
            return null;
    }
}


const StatusIndicator = ({status}: StatusIndicatorProps) => {
    return (
        <>
            {getStatusDom(status)}
        </>
    )
}

export default StatusIndicator