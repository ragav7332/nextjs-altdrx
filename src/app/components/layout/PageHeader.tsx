import React from 'react'

interface PageHeaderProps {
  title: string
  description?: string
  image?: string
}

export const PageHeader = ({ title, description, image }: PageHeaderProps) => {
  return (
    <div className="relative h-96">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-white text-xl max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  )
}