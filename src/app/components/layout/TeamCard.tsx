import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

interface TeamCardProps {
  name: string
  position: string
  image: string
  bio: string
}

export const TeamCard = ({ name, position, image, bio }: TeamCardProps) => {
  return (
    <Card className="overflow-hidden">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-blue-600 mb-4">{position}</p>
        <p className="text-gray-600">{bio}</p>
      </CardContent>
    </Card>
  )
}

