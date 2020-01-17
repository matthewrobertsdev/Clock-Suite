import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
class UnconnectedPrivacyPolicyPage extends React.Component {
    render(){
        return (<div className={'main-background main-'+this.props.colorClass}>
            <br></br><h1 className='main-h-1'>Privacy Policy</h1>
            <div className='main-text'>Celeritas Apps collects log data as allowed by the user of Adjustable Clock 
            and provided by Apple.  We only use data as provided by Apple and do not collect any data on our own 
            about the users of Adjustable Clock.</div><br></br><br></br><br></br></div>);
    }
}
const PrivacyPolicyPage=connect(mapStateToProps, null)(UnconnectedPrivacyPolicyPage)
export default PrivacyPolicyPage;