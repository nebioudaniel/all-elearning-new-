import { Button, buttonVariants } from '@/components/ui/button';
import { Link } from 'lucide-react';
import React from 'react';


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    
<div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl py-2 my-1">
          The premier E-learning hub for. {' '}
            <span className='text-green-600'>
              Ethiopians
            </span>
            .
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to All E-Learning – Your Gateway to a World of Knowledge! Explore our diverse collection of over 100 courses. Whether you aspire to be an instructor or a dedicated learner, we offer both Teacher and Student modes. 
          </p>
        </div>
    <div className="flex flex-col items-center justify-center ">
  <p className="text-lg font-bold text-black mb-4 text-center">
    Embark on the Greatest Journey
  </p>
  {children}
</div>



    </> 
   
  );
};

export default AuthLayout;
