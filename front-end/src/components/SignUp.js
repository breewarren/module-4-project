import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            email: "",
            name: "",
            password: "",
            img_url: 'F'
        }
    }

    onChange = (e) => {
        let {name, value} = e.target
        this.setState({[name]: value})
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify({
                user: {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    img_url: this.state.img_url
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.user !== undefined) {
                const { history } = this.props
                history.push('/signin')
            } else {
                alert("This name or email is already associated with an account. Please sign in instead.")
            }
        })
    }

    signIn = () => {
        const { history } = this.props
        history.push('/signin')
    }

    render() {
        return (
            <div className="background">
            <div className="login-form">
                <Card style={{ width: '25rem' }}>
                <Card.Header className="text-center">New User</Card.Header>
                <Card.Body>
            <Form>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.onChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={this.onChange} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.onChange} />
                </Form.Group>
                <Button onClick={this.onSubmit} variant="outline-info" type="submit">Create Account</Button>
                <Button variant="outline-info float-right" onClick={this.signIn} type="submit">Sign in Instead</Button>
            </Form>
            </Card.Body>
            </Card>
        </div>
        </div>
        )
    }
}
