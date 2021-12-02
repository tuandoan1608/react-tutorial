import react  from "react"; 

class Header extends react.Component {

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-10">
                        <p className="mt-3"> Cloud Nine Solutions</p>
                    </div>
                    <div className="col-md-2">
                        <a href="/logout" className="btn btn-primary mt-3">Logout</a>
                    </div>
                </div>
                <hr></hr>
            </div>
        )
    }
}
export default Header;