import React from 'react'

interface User {
  name: string;
  title: string;
  email: string;
  role: string;
}

const users: User[] = [
  {
    name: 'Musharof Chowdhury',
    title: 'Multidisciplinary Web Entrepreneur',
    email: 'musharof@example.com',
    role: 'Owner',
  },
  {
    name: 'Naimur Rahman',
    title: 'Website Front-end Developer',
    email: 'naimurrahman@example.com',
    role: 'Member',
  },
  {
    name: 'Shafiq Hammad',
    title: 'Regional Paradigm Technician',
    email: 'shafiq.hd@example.com',
    role: 'Moderator',
  },
  {
    name: 'Alex Semuyel',
    title: 'Applications Engineer',
    email: 'alex.semuel@example.com',
    role: 'Admin',
  },
  {
    name: 'Sulium Keliym',
    title: 'Lead Implementation Liaison',
    email: 'suliym.info@example.com',
    role: 'Member',
  },
  {
    name: 'Jhon Smith',
    title: 'Regional Paradigm Technician',
    email: 'jhon.smith@example.com',
    role: 'Admin',
  },
  {
    name: 'Jenifer Lofess',
    title: 'Multidisciplinary Web Entrepreneur',
    email: 'loffes.cooper@example.com',
    role: 'Member',
  },
  {
    name: 'Devid Deekook',
    title: 'Central Security Manager',
    email: 'devid.decok@example.com',
    role: 'Moderator',
  },
];

const TableFive: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-[10px]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[670px]">
          {/* table header start */}
          <div className="grid grid-cols-12 bg-[#F9FAFB] px-5 py-4 dark:bg-meta-4 lg:px-7.5 2xl:px-11">
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


            <div className="col-span-2">
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
                    {user.role}
                  </p>
                </div>

                <div className="col-span-1">
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