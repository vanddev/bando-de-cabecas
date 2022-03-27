import subprocess

def main():
    repo_files = set(cmd_output('git', 'lfs', 'status').splitlines())
    locked_files = set(cmd_output('git', 'lfs', 'locks').splitlines())
    user_email = cmd_output('git', 'config', 'user.email').splitlines()[0]
    # for file in repo_files:
        # print(file.strip())
    # print(f'repo_files {repo_files}')
    for file_locked in locked_files:
        parsed_file = parse_locked_file(file_locked)
        if(contains(repo_files, parsed_file["file"]) and parsed_file["user"] in user_email):
            print(f'The file {parsed_file["file"]} is locked and cannot be commited')
            exit(1)


def parse_locked_file(locked_file):
    chunks = locked_file.split("\t")
    return {
        "file": chunks[0].strip(),
        "user": chunks[1].strip(),
        "id": chunks[2].strip()
    }

def contains(list, item):
    # print(f'item {item}')
    res = [it for it in list if(item in it)]
    return bool(res)


class CalledProcessError(RuntimeError):
    pass


def cmd_output(*cmd: str, retcode: int | None = 0, **kwargs: any) -> str:
    kwargs.setdefault('stdout', subprocess.PIPE)
    kwargs.setdefault('stderr', subprocess.PIPE)
    proc = subprocess.Popen(cmd, **kwargs)
    stdout, stderr = proc.communicate()
    stdout = stdout.decode()
    if retcode is not None and proc.returncode != retcode:
        raise CalledProcessError(cmd, retcode, proc.returncode, stdout, stderr)
    return stdout


if __name__ == "__main__":
    main()