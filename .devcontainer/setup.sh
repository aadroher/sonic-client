sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.0.2/zsh-in-docker.sh)"
sed -i -e "s/powerlevel10k\/powerlevel10k/avit/g" /root/.zshrc
