import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

function New() {
  return (
    <div className='new'>
      <Sidebar />
      <div className='newContainer'>
        <Navbar />
        <div className='top'>
          <h2>Add New User</h2>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src='https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              alt='profile pic'
            />
          </div>
          <div className='right'>
            <form>
              <div className='formInput'>
                <label htmlFor='file'>
                  Image:
                  <DriveFolderUploadOutlinedIcon className='icon' />
                </label>
                <input type='file' id='file' style={{ display: 'none' }} />
              </div>
              <div className='formInput'>
                <label htmlFor='userName'>Username</label>
                <input
                  type='text'
                  placeholder='Username'
                  name='userName'
                  id='userName'
                />
              </div>
              <div className='formInput'>
                <label htmlFor='name'>First and Last Name</label>
                <input
                  type='text'
                  placeholder='Full Name'
                  name='name'
                  id='name'
                />
              </div>
              <div className='formInput'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  placeholder='john_doe@email.com'
                  name='email'
                  id='email'
                />
              </div>
              <div className='formInput'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='text'
                  placeholder='+1-234-567-8978'
                  name='phone'
                  id='phone'
                />
              </div>
              <div className='formInput'>
                <label htmlFor='password'>Password</label>
                <input
                  type='text'
                  placeholder='Enter Password'
                  name='password'
                  id='password'
                />
              </div>
              <div className='formInput'>
                <label htmlFor='address'>Address</label>
                <input
                  type='text'
                  placeholder='Address'
                  name='address'
                  id='address'
                />
              </div>
              <div className='formInput'>
                <label htmlFor='country'>Country</label>
                <input
                  type='text'
                  placeholder='Country'
                  name='country'
                  id='country'
                />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default New;
