module Api 
  module V1
    class CustomersController < ApplicationController

      def index
        customers = Customer.all

        render json: CustomerSerializer.new(customers).serialized_json
      end

 
    end
  end
end