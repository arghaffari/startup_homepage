import React from 'react';
import { Form, Icon, Input, Button, Card, Row, Col } from 'antd';
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
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="subscription">
            <h1>از تخفیف‌ها و پیشنهادهای ویژه ما با خبر شوید</h1>
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
          </div>
        </Col>
      </Row>
      
    );
  }
}

export default Form.create()(Subscription);