import React from "react";

const ChessRules = () => {
    return (
        <div className="bg-gray-100 text-gray-800">
            {/* Header */}
            <header className="bg-gray-900 text-white py-8 shadow-lg">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Chess Rules</h1>
                    <p className="text-lg mt-2">
                        Master the art of chess by understanding its rules and strategies.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto py-12 px-6 space-y-12">
                <GeneralRules />
                <PieceMovements />
                <CheckAndCheckmate />
            </main>
        </div>
    );
};

const GeneralRules = () => (
    <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">General Rules</h2>
            <p className="text-lg">
                White always moves first, and players alternate turns. Movement is
                mandatory. If a player has no legal moves and is not in check, the
                game results in a <strong>stalemate</strong>, ending in a draw.
            </p>
        </div>
    </section>
);

const PieceMovements = () => (
    <section className="bg-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Piece Movements</h2>
            <ul className="space-y-3 text-lg">
                <li>
                    <strong>King:</strong> Moves one square in any direction; special
                    move: castling.
                </li>
                <li>
                    <strong>Queen:</strong> Moves any number of squares diagonally,
                    horizontally, or vertically.
                </li>
                <li>
                    <strong>Rook:</strong> Moves any number of squares vertically or
                    horizontally.
                </li>
                <li>
                    <strong>Bishop:</strong> Moves any number of squares diagonally.
                </li>
                <li>
                    <strong>Knight:</strong> Moves in an “L” shape: two squares in one
                    direction, then one perpendicular.
                </li>
                <li>
                    <strong>Pawn:</strong> Moves one square forward (or two squares on
                    its first move); can perform en passant and promotion.
                </li>
            </ul>
        </div>
    </section>
);

const CheckAndCheckmate = () => (
    <section className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Check and Checkmate
            </h2>
            <p className="text-lg">
                When a king is under threat and can escape or defend itself, it is in{" "}
                <strong>check</strong>. The player must move to resolve the threat. If
                no moves can save the king, it results in a <strong>checkmate</strong>.
            </p>
        </div>
    </section>
);

export default ChessRules;
