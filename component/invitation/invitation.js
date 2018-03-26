import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input,  Row, Col, Button } from 'antd';
const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  // state = {
  //   confirmDirty: false,
  // };
  handleSubmit = (e) => {
    //   preventDefault ---- 取消事件的默认动作。
    //   如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。
    // e.preventDefault();     可以不用submit类型提交，去掉这个
    //validateFieldsAndScroll , 校验后有错误会自动滚动到错误表单。
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      console.log(values);
    });
  }
  // handleConfirmBlur = (e) => {
  //   const value = e.target.value;
  //   this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  // }

  // checkPassword = (rule, value, callback) => {
  //   const form = this.props.form;
  //   if (value && value !== form.getFieldValue('password')) {
  //     callback('您两次输入的密码不一致!');
  //   } else {
  //     callback();
  //   }
  // }
  // checkConfirm = (rule, value, callback) => {
  //   const form = this.props.form;
  //   if (value && this.state.confirmDirty) {
  //     form.validateFields(['confirm'], { force: true });
  //   }
  //   callback();
  // }


  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <div>
        <FormItem
          {...formItemLayout}
          label="手机号"
          hasFeedback
        >
          {
            //
            getFieldDecorator('moubile', {
            //校验规则
            rules: [{
              // type: 'email', message: 'The input is not valid E-mail!',      //内建校验类型
              message:'请输入11位数字',
              pattern:/^\d{11}$/
            }, {
              //是否必选
              required: true, message: '请输入手机号！',
            }],
          })(
            <Input />
          )
        }
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="密码"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: '请输入密码！',
            }, {
              // validator: this.checkConfirm,    //自定义校验，函数内必须调用第三个callback参数
              min:6,
              max:30,
              message:'请输入至少六位字符的密码'
            }],
          })(
            <Input />
          )}
        </FormItem>
        <Button type="primary" onClick={()=>{this.handleSubmit()}}>Submit</Button>
      </div>
    );
  }
}

//经过 Form.create 包装的组件将会自带 this.props.form 属性
const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm
