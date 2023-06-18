import React from "react";
import './Top.scss';
import Weather from "./Weather";
import '../sass/App.scss';
import { Manager, Reference, Popper} from 'react-popper';
import { placements } from "@popperjs/core";

export default class TopSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSelectLocationOpen: false,
        }
    }

    onToggleSelectLocation(){
        this.setState((prevState) => ({ isSelectLocationOpen: !prevState.isSelectLocationOpen}))
    }

    render(){
        const { isSelectLocationOpen } = this.state;
        return(
            <div className="top-container">
                <div className="title">
                    <h3>WeatherNow</h3>
                </div><br />
                <Weather {...this.props}/>
                <Manager>
                    <Reference>
                        {({ ref }) => (
                            <button className="btn btn-select-location" 
                                    ref={ref} 
                                    onClick={this.onToggleSelectLocation.bind(this)}
                            > SELECT LOCATION
                            </button>
                        )}
                    </Reference>
                    <Popper placement="top">
                        {({ ref, style, placement, arrowProps }) => ( 
                            isSelectLocationOpen && (
                            <div className="popup-container" 
                                 ref={ref} 
                                 style={style} 
                                 data-placement={placement}
                            > <div className="form-container">
                                <label htmlFor="location-name">Location Name</label>
                                <input id="location-name" type="text" placeholder="City Name" />
                                <button className="btn btn-select-location">Select</button>
                            </div>
                                <div ref={arrowProps.ref} 
                                     style={arrowProps.style} />
                            </div>
                            )
                        )}
                    </Popper>
                </Manager>
            </div>
        );
    }
}