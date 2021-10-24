module Api 
  module V1
    class SalonsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        salons = Salon.all

        render json: SalonSerializer.new(salons, options).serialized_json
      end

      def show
        salon = Salon.find_by(slug: params[:slug])

        render json: SalonSerializer.new(salon, options).serialized_json
      end

      def create
        salon = Salon.new(salon_params)

        if salon.save
          render json: SalonSerializer.new(salon).serialized_json
        else
          render json: { error: salon.errors.messages }, status: 422
        end
      end

      def update
        salon = Salon.find_by(slug: params[:slug])

        if salon.update(salon_params)
          render json: SalonSerializer.new(salon, options).serialized_json
        else
          render json: { error: salon.errors.messages }, status: 422
        end
      end

      
      def destroy
        salon = Salon.find_by(slug: params[:slug])

        if salon.destroy
          head :no_content
        else
          render json: { error: salon.errors.messages }, status: 422
        end
      end

      private

      def salon_params
        params.require(:salon).permit(:name, :description, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end

    end
  end
end