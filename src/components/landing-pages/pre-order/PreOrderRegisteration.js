import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import PreOrderAnnounce from '../../PreOrderAnnounce';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

class PreOrderRegisteration extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    hasText: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  render() {
    const { getFieldDecorator } = this.props.form;

    

    return (
      <div>
        <PreOrderAnnounce 
          hasText={false} 
          bgColor={'transparent'} 
          textColor={'brown'}
          fontSize={'22px'}/>
        <div style={{margin: '0 auto', width: '60%', minWidth: '280px'}}>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('text', {
                rules: [{
                  type: 'text', message: 'متن وارد شده صحیح نیست',
                }, {
                  required: true, message: 'لطفا نام و نام خانوادگی خود را وارد نمایید',
                }],
              })(
                <Input type="text" placeholder="نام و نام خانوادگی" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('phonenumber', {
                rules: [{
                  required: true, message: 'Please input your password!',
                }],
              })(
                <Input type="number" placeholder="شماره تلفن همراه" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: 'متن را درست وارد کنید',
                }],
              })(
                <Input type="text" placeholder="صنف" onBlur={this.handleConfirmBlur} />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('website', {
                rules: [{ required: true, message: 'متن را به صورت صحیح وارد کنید' }],
              })(
                <Input type="text" placeholder="آدرس"  />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">پیش خرید</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

const WrappedPreOrderRegisteration = Form.create()(PreOrderRegisteration);

export default Form.create()(WrappedPreOrderRegisteration);