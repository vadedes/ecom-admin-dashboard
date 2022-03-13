import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';

function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className='singleContainer'>
        <Navbar />
        <div className='top'>
          <div className='left'>
            <div className='editButton'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src='https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='profile avatar'
                className='itemImg'
              />
              <div className='details'>
                <h2 className='itemTitle'>Jane Doe</h2>
                <div className='detailedItem'>
                  <span className='itemKey'>Email:</span>
                  <span className='itemValue'>janedoe@email.com</span>
                </div>
                <div className='detailedItem'>
                  <span className='itemKey'>Phone:</span>
                  <span className='itemValue'>+1 (555) 555-5555</span>
                </div>
                <div className='detailedItem'>
                  <span className='itemKey'>Address:</span>
                  <span className='itemValue'>
                    Elton St. 234 Garden Yd., <br /> New York
                  </span>
                </div>
                <div className='detailedItem'>
                  <span className='itemKey'>Country:</span>
                  <span className='itemValue'>USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
            <Chart aspect={3 / 1} title='User Spending (Last 6 Months)' />
          </div>
        </div>
        <div className='bottom'></div>
      </div>
    </div>
  );
}

export default Single;
