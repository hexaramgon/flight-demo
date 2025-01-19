import React from 'react'
import './customtable.css'

interface User {
  name: string;
  title: string;
  email: string;
  role: string;
}

const users: User[] = [
  {
    name: 'Dec 16th, 2024',
    title: 'N12435',
    email: 'musharof@example.com',
    role: 'Interior Level 1, Interior Level 2 ',
  },
  {
    name: 'Dec 16th, 2024',
    title: 'N124235',
    email: 'naimurrahman@example.com',
    role: 'Interior Level 1',
  },
  {
    name: 'Dec 16th, 2024',
    title: 'N1245',
    email: 'shafiq.hd@example.com',
    role: 'Exterior Level 1, Interior Level 2 ',
  },
  {
    name: 'Dec 16th, 2024',
    title: 'N11245',
    email: 'alex.semuel@example.com',
    role: 'Exterior Level 2 ',
  },
  {
    name: 'Dec 14th, 2024',
    title: 'N112945',
    email: 'suliym.info@example.com',
    role: 'Interior Level 1, Exterior Level 2 ',
  },
  {
    name: 'Dec 16th, 2024',
    title: 'N11945',
    email: 'jhon.smith@example.com',
    role: 'Interior Level 1, Interior Level 2 ',
  },
  {
    name: 'Dec 15th, 2024',
    title: 'N119459',
    email: 'loffes.cooper@example.com',
    role: 'Exterior Level 1 ',
  },
  {
    name: 'Dec 15th, 2024',
    title: 'N19459',
    email: 'devid.decok@example.com',
    role: 'Exterior Level 1 ',
  },
];

const TableFive: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-[10px]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[470px]">
          {/* table header start */}
          <div className="grid grid-cols-12 bg-[#F9FAFB] px-2 py-1 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
            <div className="col-span-3">
              <h5 className="font-small text-[#637381] dark:text-bodydark">
                DATE
              </h5>
            </div>

            <div className="col-span-3">
              <h5 className="font-small text-[#637381] dark:text-bodydark">
                TAIL NUMBER
              </h5>
            </div>


            <div className="col-span-2">
              <h5 className="font-small text-[#637381] dark:text-bodydark">
                STATUS
              </h5>
            </div>


            <div className="col-span-4">
              <h5 className="font-small text-[#637381] dark:text-bodydark">
                SERVICE
              </h5>
            </div>
          </div>
          {/* table header end */}

          {/* table body start */}
          <div className="bg-white dark:bg-boxdark">
            {users.map((user, index) => (
              <div
                key={index}
                className="grid grid-cols-12 border-t border-[#EEEEEE] px-2 py-3 dark:border-strokedark sm:px-6.5 2xl:px-7"
              >
                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.name}
                  </p>
                </div>

                <div className="col-span-3">
                  <p className="text-[#637381] dark:text-bodydark">
                    {user.title}
                  </p>
                </div>


                <div className="col-span-2">
                  <p className="text-[#637381] dark:text-bodydark">
                  <button className="override-succ inline-flex rounded-full border border-primary py-1 px-3 text-xs font-small  hover:opacity-80">
                    Completed
                  </button>
                  </p>
                </div>

                <div className="col-span-4">
                <p className="text-[#637381] dark:text-bodydark">
                    {user.role}
                  </p>                
                  </div>
              </div>
            ))}
          </div>
          {/* table body end */}
        </div>
      </div>
    </div>
  );
};

export default TableFive