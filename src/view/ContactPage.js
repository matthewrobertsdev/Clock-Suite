import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
class UnconnectedContactPage extends React.Component {
    render(){
        return (<div className={'main-background main-'+this.props.colorClass}>
            <br></br><h1 className='main-h-1'>Reach out!</h1>
            <div className='main-text'>Do you have a question or feedback about a Cerlitas product?  
            Please do not hesitate.  Send the founder an email at:<br></br><br></br>
            <a className='main-text ten-percent-margin' href="mailto:matt.roberts.is@gmail.com">matt.roberts.is@gmail.com</a></div><br></br><br></br><br></br></div>);
    }
}
const ContactPage=connect(mapStateToProps, null)(UnconnectedContactPage)
export default ContactPage;