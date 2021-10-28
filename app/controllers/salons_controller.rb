class SalonsController < ApplicationController
  def index 
    # @salons = Salon.all

    # @markers = @salons.geocoded.map do |salon|
    #   {
    #     lat: salon.latitude,
    #     lng: salon.longitude,
    #     info_window: render_to_string(partial: "info_window", locals: { salon: salon })
    #   }
    # end
  end
end
