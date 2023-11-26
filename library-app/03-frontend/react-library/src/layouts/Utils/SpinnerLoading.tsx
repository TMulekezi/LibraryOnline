export const SpinnerLoading = () => {
    return (
        <div className="container m-5 d-flex justify-content-center" style={{ height: 5050 }}>
            <div className="spinner-border text-primary" role='status'>
                <span className="visually-hidden">
                    Loading...
                </span>
            </div>
        </div>
    );
}