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
          <CustomCard1 title={"Services Completed"} number={13}></CustomCard1>
          <CustomCard1 title={"Pending Services"} number={33}></CustomCard1>
          <CustomCard1 title={"In Progress Completed"} number={2}></CustomCard1>
          <CustomCard1 title={"Tails"} number={12}></CustomCard1>
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
