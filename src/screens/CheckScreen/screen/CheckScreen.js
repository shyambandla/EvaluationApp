import * as React from 'react';
import CheckComponent from '../components';
import CheckServiceComponent from '../service/index.service';

class CheckScreen extends React.Component {
    //created separate component for business logic and view
    
    render() {
        return (
            <CheckServiceComponent {...this.props}>
                {
                    props => (
                        <CheckComponent
                            {...props}
                        />
                    )
                }
            </CheckServiceComponent>
        );
    };
};

export default CheckScreen;