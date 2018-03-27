import React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import PreOrderAnnounce from '../../PreOrderAnnounce';
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class PreOrderRegisteration extends React.Component {
  constructor(props){
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    hasText: false,
    responsiveFontSize: null,
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

  updateDimensions(){
    const getScreenSize = () => {
      if(typeof window !== 'undefined') {
        var windowSize = {
          width: window.innerWidth || document.body.clientWidth,
          height: window.innerHeight || document.body.clientHeight
        };
      }
      return windowSize;
    };

    let size = getScreenSize();
    let fontSize = null;
    if(size.width >= 1200) {
      fontSize = '22px';
    } else if(size.width < 1200 && size.width >= 700) {
      fontSize = '20px';
    } else if(size.width < 700 && size.width >= 420) {
      fontSize = '16px';
    } else {
      fontSize = '12px';
    }
    console.log(fontSize);
    this.setState({responsiveFontSize: fontSize});
  }

  // componentWillMount(){
  //   this.updateDimensions();
  // }

  componentDidMount(){
    this.updateDimensions();
    console.log('**********');
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <PreOrderAnnounce 
          hasText={false} 
          bgColor={'transparent'} 
          textColor={'brown'}
          fontSize={this.state.responsiveFontSize}/>
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