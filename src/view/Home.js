import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
class UnconnectedHome extends React.Component {
    render(){
        return (<div className={'main-background main-'+this.props.colorClass}><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>);
    }
}
const Home=connect(mapStateToProps, null)(UnconnectedHome)
export default Home;