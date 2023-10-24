import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character/1,2,3')
        const result = await response.json()
        return NextResponse.json(result)
    } catch (error) {
        throw error
    }
}