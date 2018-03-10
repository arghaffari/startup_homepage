import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';
import { FaCoffee, FaConnectdevelop } from 'react-icons/lib/fa';
import { 
  MdPhonelinkSetup, 
  MdSecurity, 
  MdCloudDone, 
  MdDoneAll, 
  MdApps,
  MdUpdate,
  MdDevices,
  MdBusiness
} from 'react-icons/lib/md/';

const data = [
  {
    id: 0,
    title: ' نصب و راه‌اندازی بسیار ساده ',
    desc: 'سلام',
    link: '/abc',
  },
  {
    id: 1,
    title: 'تضمین امنیت و محرمانگی',
    desc: '',
    link: '',
  },
  {
    id: 2,
    title: 'محیطی ساده و حرفه‌ای',
    desc: '',
    link: '',
  },
  {
    id: 3,
    title: 'سیستمی کامل، یکجا و یکپارچه',
    desc: '',
    link: '',
  },
  {
    id: 4,
    title: 'استفاده به صورت آنلاین و آفلاین',
    desc: '',
    link: '',
  },
  {
    id: 5,
    title: 'مدیریت چند فروشگاه بصورت همزمان',
    desc: '',
    link: '',
  },
  {
    id: 6,
    title: 'دسترسی به حساب در هر زمان و مکان',
    desc: '',
    link: '',
  },
];

class AppFeatures extends React.Component {
  getAvatar(id) {
    switch (id){
    case 0:
      return <Avatar className="avatar"><MdPhonelinkSetup/></Avatar>;
    case 1:
      return <Avatar className="avatar"><MdSecurity/></Avatar>;
    case 2:
      return <Avatar className="avatar"><FaCoffee/></Avatar>;
    case 3:
      return <Avatar className="avatar"><MdApps/></Avatar>;
    case 4:
      return <Avatar className="avatar"><MdCloudDone/></Avatar>;
    case 5:
      return <Avatar className="avatar"><MdBusiness/></Avatar>;
    case 6:
      return <Avatar className="avatar"><MdDevices/></Avatar>;
    default:
      return <Avatar className="avatar"><FaConnectdevelop/></Avatar>;
    }
  }
  
  render(){
    return(
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={this.getAvatar(item.id)}
              title={<a href={item.link}>{item.title}</a>}
              description={item.desc}
            />
          </List.Item>
        )}
      />
    );
  }
}

export default AppFeatures;