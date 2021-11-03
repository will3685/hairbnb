module Api 
  module V1
    class ProductsController < ApplicationController

      def index
        products = Product.all

        render json: ProductSerializer.new(products).serialized_json
      end

 
    end
  end
end