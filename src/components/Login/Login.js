import React from 'react'
import {Button, Input, Card, Layout} from 'element-react'
import './component.css'

class Login extends React.Component {
    render() {
        return (
            <div className="login-form">
                <Layout.Row>
                    <Layout.Col>
                            <div>
                                <img className="logo-holder" src={process.env.PUBLIC_URL + '/static/images/clash.png'}/>
                            </div>
                            <Input className="input" placeholder="Email" type="email"/>
                            <Input className="input" placeholder="Password" type="password" />
                            <Button type='primary'>Login</Button>

                    </Layout.Col>
                </Layout.Row>
            </div>
        )
    }
}

export default Login
