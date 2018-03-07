import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
import PropTypes from 'prop-types';


class Subscription extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('phonenumber', {
            rules: [{ required: true, message: 'لطفا شماره تماس خود را وارد کنید' }],
          })(
            <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} type="number" placeholder="شماره تلفن همراه" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: false }],
          })(
            <Input size="large" prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="ایمیل" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            <p style={{fontFamily: 'iranyekan', fontSize: '18px'}}>ثبت</p>
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Subscription);