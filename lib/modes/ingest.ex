defmodule SonicClient.Modes.Ingest do
  alias SonicClient.TcpConnection

  def push(conn, collection, bucket, object, term) do
    command = ~s(PUSH #{collection} #{bucket} #{object} "#{term}")

    case TcpConnection.request(conn, command) do
      {:ok, "OK"} -> :ok
      error -> error
    end
  end

  def count(conn, collection) do
    command = "COUNT #{collection}"

    case TcpConnection.request(conn, command) do
      {:ok, "RESULT " <> num_str} ->
        case Integer.parse(num_str) do
          {num, _} -> num
        end

      error ->
        error
    end
  end

  def flush(conn, collection) do
    command = "FLUSHC #{collection}"

    case TcpConnection.request(conn, command) do
      {:ok, "RESULT " <> _msg} ->
        :ok

      error ->
        error
    end
  end
end