'use client';
import React from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import Breadcrumbs from './Breadcrumbs';
export default function Header() {
  const { user } = useUser();

  return (
    <div className='flex justify-between items-center p-2 md:p-5'>
      {user && (
        <h1 className='text-2xl font-bold'>
          {user.firstName}
          {`'s`} Space
        </h1>
      )}

      <Breadcrumbs />
      <div>
        <UserButton />
      </div>
    </div>
  );
}
