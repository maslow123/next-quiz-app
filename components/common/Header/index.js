function Header({ withScore = false }){
    return(
        <div className="d-flex justify-content-between align-items-center mb-3 h4 bold">
            <div className="timer">
                <label>Waktu</label>
            </div>
            
            {withScore && (
                <div className="score">
                    <label>Score</label>
                </div>
            )}
            
            <div className="groupName">
                <label>Nama kelompok</label>
            </div>
        </div>
    );
}

export default Header;