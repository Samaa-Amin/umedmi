import React  from 'react';
import { Form, Input, Button  } from 'antd';
import uuid  from 'uuid/dist/v1'



const AddForm = (props) => {
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 6 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
  
      
      const onFinish = values => {
        values.key=uuid()
        // values.delete=<button onClick={()=>{props.deletePatian(values.key)}}>delete</button>
        // values.edit=<button onClick={props.editPatien}>edit</button>

        console.log('Success:', values);
        // props.addPerson(values)
        props.handleAdd(values)
        
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    return ( 
        <Form
      {...layout}  //for style
      name="basic"
      // initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Patient Name"
        name="name"
        rules={[{ required: true, message: 'Please input a name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Patient Address"
        name="gender"
        rules={[{ required: true, message: 'Please input Address!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Patient Age"
        name="age"
        rules={[{ required: true, message: 'Please input age!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button className="submit" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
     );
}
 
export default AddForm;