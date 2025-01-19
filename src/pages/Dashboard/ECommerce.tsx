import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';
import CustomCard1 from '../../custom/CustomCard1';
import './custompage.css';
import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import TabThree from '../../components/Tabs/TabThree';
import TableFour from '../../components/Tables/TableFour';
import TableSix from '../../components/Tables/TableSix';
import TableFive from '../../components/Tables/TableFive';
import CustomCard2 from '../../custom/CustomCard2';

const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="">
        <h1 id="title">Dashboard</h1>
        <div className="top-row">
          <CustomCard1 title={"Services Completed"} number={13} svg={      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 9L10 12L20 2M19 10V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H14" stroke="#52525B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>}></CustomCard1>
          <CustomCard1 title={"Pending Services"} number={33} svg= {<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 21H15M1 1H15M13 21V16.828C12.9999 16.2976 12.7891 15.789 12.414 15.414L8 11M8 11L3.586 15.414C3.2109 15.789 3.00011 16.2976 3 16.828V21M8 11L3.586 6.586C3.2109 6.21101 3.00011 5.70239 3 5.172V1M8 11L12.414 6.586C12.7891 6.21101 12.9999 5.70239 13 5.172V1" stroke="#52525B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}></CustomCard1>
          <CustomCard1 title={"In Progress Completed"} number={2} svg = {<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.516 1.00947 14.931 1.99122 16.74 3.74L19 6M19 6V1M19 6H14M19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C7.48395 18.9905 5.06897 18.0088 3.26 16.26L1 14M1 14H6M1 14V19" stroke="#52525B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}></CustomCard1>
          <CustomCard1 title={"Tails"} number={12} svg = {<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.8 18.2L14 10L17.5 6.5C19 5 19.5 3 19 2C18 1.5 16 2 14.5 3.5L11 7L2.8 5.2C2.3 5.1 1.9 5.3 1.7 5.7L1.4 6.2C1.2 6.7 1.3 7.2 1.7 7.5L7 11L5 14H2L1 15L4 17L6 20L7 19V16L10 14L13.5 19.3C13.8 19.7 14.3 19.8 14.8 19.6L15.3 19.4C15.7 19.1 15.9 18.7 15.8 18.2Z" stroke="#52525B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
}></CustomCard1>
        </div>
        <div className='row'>
          <div className='col-1'>
            {/* <CustomCard2></CustomCard2> */}
            <div className='outer outer-contact'>
            <h2>Book a Service</h2>

              {/* <!-- Contact Form --> */}
            <div className=" sub-form rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <form action="#">
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-0.5 block text-black dark:text-white">
                        Tail Number
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="custom-label w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-0.5 block text-black dark:text-white">
                        Aircraft Type
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="custom-label w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <SelectGroupOne />

                  <div className="mb-2.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-0.5 block text-black dark:text-white">
                        Arrival Time
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="custom-label w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-0.5 block text-black dark:text-white">
                        Take Off Time
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="custom-label w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-0.5 block text-black dark:text-white">
                        FBO
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="custom-label w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-0.5 block text-black dark:text-white">
                        Complete By
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        className="custom-label w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  



                  <button className="black flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Book
                  </button>
                </div>
              </form>
            </div>

            </div>
            <br></br>

            <div className='outer'>
                <h2>Booking History</h2>
                <br></br>
                <TableFive></TableFive>
            </div>
          </div>
          <div className='outer map-panel'>
          <div className='search'> 
          <input
                        type="text"
                        placeholder="Search for flight, tail, airport or city"
                        className="test w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
          </div>
          <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                width="100%"
                height="250"
                style={{ borderRadius: "8px" }}
                aria-hidden="false"
            />
            <CustomCard2 name={"Jet Center Services"} location={"KLAS (Las Vegas, NV)"} hours={"24/7"} number={"+1 (310) 920-2452"}></CustomCard2>
            <CustomCard2 name={"SkyLink FBO"} location={"LAX (Los Angeles, CA)"} hours={"06:00 AM - 11:00 PM"} number={"+1 (142) 259-2982"}></CustomCard2>
            <CustomCard2 name={"Jet Center Services"} location={"KLAS (Las Vegas, NV)"} hours={"24/7"} number={"+1 (310) 920-2452"}></CustomCard2>
            <CustomCard2 name={"SkyLink FBO"} location={"LAX (Los Angeles, CA)"} hours={"06:00 AM - 11:00 PM"} number={"+1 (142) 259-2982"}></CustomCard2>
            <CustomCard2 name={"Jet Center Services"} location={"KLAS (Las Vegas, NV)"} hours={"24/7"} number={"+1 (310) 920-2452"}></CustomCard2>
            <CustomCard2 name={"SkyLink FBO"} location={"LAX (Los Angeles, CA)"} hours={"06:00 AM - 11:00 PM"} number={"+1 (142) 259-2982"}></CustomCard2>
            <CustomCard2 name={"Jet Center Services"} location={"KLAS (Las Vegas, NV)"} hours={"24/7"} number={"+1 (310) 920-2452"}></CustomCard2>
            <CustomCard2 name={"SkyLink FBO"} location={"LAX (Los Angeles, CA)"} hours={"06:00 AM - 11:00 PM"} number={"+1 (142) 259-2982"}></CustomCard2>
            <CustomCard2 name={"Jet Center Services"} location={"KLAS (Las Vegas, NV)"} hours={"24/7"} number={"+1 (310) 920-2452"}></CustomCard2>
            <CustomCard2 name={"SkyLink FBO"} location={"LAX (Los Angeles, CA)"} hours={"06:00 AM - 11:00 PM"} number={"+1 (142) 259-2982"}></CustomCard2>
          </div>
        </div>

      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
