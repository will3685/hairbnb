module Api 
  module V1
    class OrdersController < ApplicationController

      def index
        orders = Order.all

        render json: OrderSerializer.new(orders).serialized_json
      end

 
    end
  end
end