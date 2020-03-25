import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
class UnconnectedPrivacyPolicyPage extends React.Component {
    render(){
        return (<div className={'main-background main-'+this.props.colorClass}>
            <br></br><h1 className='main-h-1'>Privacy Policy</h1>
            <div className='main-text'>I, Matt Roberts, collect log data as allowed by the user of Clock Suite 
            and provided by Apple.  I do not collect any data on my own 
            from the use of Clock Suite by its users.</div><br></br><br></br><br></br></div>);
    }
}
const PrivacyPolicyPage=connect(mapStateToProps, null)(UnconnectedPrivacyPolicyPage)
export default PrivacyPolicyPage;