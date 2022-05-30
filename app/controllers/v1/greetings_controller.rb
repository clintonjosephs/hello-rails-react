class V1::GreetingsController < ApplicationController
    def index
        random_greeting = Message.all.sample
        render json: { status: 'SUCCESS', message: 'random greeting loaded', data: random_greeting.greeting },
        status: :ok
    end
end
