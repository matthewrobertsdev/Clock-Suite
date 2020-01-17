import React from 'react';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { colorClass: state.misc.colorClass } };
class UnconnectedAboutPage extends React.Component {
    render(){
        return (<div className={'main-background main-'+this.props.colorClass}>
            <br></br><h1 className='main-h-1'>Why Celeritas?</h1>
            <div className='main-text'>Celeritas is the latin word for swiftness.  
                In Physics, the c of Einstein's equation E=mc<sup>2</sup> stands for the constant celeritas.  
                This is because c is the speed of light in a vacuum and light goes very, very fast in a vacuum.
                We think this is really, really, cool.  Thus, Celeritas Apps.</div><br></br><br></br><br></br></div>);
    }
}
const AboutPage=connect(mapStateToProps, null)(UnconnectedAboutPage)
export default AboutPage;