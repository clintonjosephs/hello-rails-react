class V1::GreetingsController < ApplicationController
    def index
        random_greeting = Message.all.sample(1).first
        render json: { status: 'SUCCESS', message: 'random greeting loaded', data: random_greeting.greeting }.to_json
    end
end
