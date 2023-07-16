import React from "react";
import { Col, Form, message, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../apicalls/users";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlicer";
function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await RegisterUser(values);
      dispatch(HideLoading())
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading())
      message.error(error.message);
    }
  };

  return (
    <div className='m-5'>
      <div className='flex items-center justify-between' >
      <h1 className='text-2xl'>
      Pay Cliq
      </h1>
      <h1 className='text-sm underline'
      onClick={()=>navigate("/login")}
      >
        Already a member , Log in
      </h1>
      </div>
      <hr/>
      <Form
      layout='vertical' 
      onFinish={onFinish}>
        <Row
        gutter={35} >
          <Col span={6}>
            <Form.Item label="First Name"
            name='firstName'>
              <input type="text" className="box-sizing"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Last Name"
            name='lastName'>
              <input type="text" className="box-sizing"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Email"
            name='email'>
              <input type="text" className="box-sizing"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Mobile"
            name='phoneNumber'>
              <input type="text" className="box-sizing"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Identification Type"
            name='identificationType'>
              <select>
                <option value="NATIONAL ID" >
                  National ID</option>
                  <option value="PASSWORD" >
                  Password</option>
                  <option value="DRIVING LICENSE" >
                  Driving License</option>
                  <option value="SOCIAL CARD" >
                  Social Security Card(SSN)</option>
              </select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Identification Number"
            name='identificationNumber'>
              <input type="text" className="box-sizing"/>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Address"
            name='address'>
              <textarea type="text" className="box-sizing"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item 
            label="Password"
            name='password'>
              <input type="password" className="box-sizing"/>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item 
            label="Confirm Password"
            name='confirmPassword'>
              <input type="password" className="box-sizing"/>
            </Form.Item>
          </Col>
        </Row>
        <div className='flex justify-end' >
          <button className='primary-contained-btn' type='submit' >Register</button>
        </div>
        
      </Form>
    </div>
  )
}

export default Register
