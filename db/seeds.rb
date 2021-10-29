# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

salons = Salon.create([
  {
    name: "Afro Hair",
    description: "Have your braids done with us",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png",
    address: "16 Villa Gaudelet, Paris"
  },
])

reviews = Review.create([
  {
    description: "Yazmin is a perfect professional",
    score: 4,
    salon: salons.first
  },
])
