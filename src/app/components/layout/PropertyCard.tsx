import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

interface PropertyCardProps {
  title: string
  price: string
  image: string
  description: string
}

export const PropertyCard = ({ title, price, image, description }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">From ${price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Invest Now
          </button>
        </div>
      </CardContent>
    </Card>
  )
}
