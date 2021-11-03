module Api 
  module V1
    class ProductsOrdersController < ApplicationController

      def index
        products_orders = ProductsOrder.all

        render json: ProductsOrderSerializer.new(products_orders).serialized_json
      end

 
    end
  end
end