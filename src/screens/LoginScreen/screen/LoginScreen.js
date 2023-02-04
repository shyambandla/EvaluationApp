import * as React from 'react';
import LoginComponent from '../components';
import LoginServiceComponent from '../service/index.service';

class LoginScreen extends React.Component {
    //created separate component for business logic and view
    render() {
        return (
            <LoginServiceComponent {...this.props}>
                {
                    props => (
                        <LoginComponent
                            {...props}
                        />
                    )
                }
            </LoginServiceComponent>
        );
    };
};

export default LoginScreen;