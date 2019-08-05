import paver
from paver.easy import *
import paver.setuputils
paver.setuputils.install_distutils_tasks()
import os, sys
from runestone.server import get_dburl
from sphinxcontrib import paverutils
import pkg_resources
from socket import gethostname
from runestone import get_master_url

sys.path.append(os.getcwd())

home_dir = os.getcwd()
master_url = None
if master_url is None:
    master_url = get_master_url()

master_app = 'runestone'
serving_dir = "./build/JS4Python"
dynamic_pages = True

if dynamic_pages:
    dest = "./published"
else:
    dest = "../../static"

options(
    sphinx = Bunch(docroot=".",),

    build = Bunch(
        builddir="./build/JS4Python",
        sourcedir="_sources",
        outdir="./build/JS4Python",
        confdir=".",
        project_name = "JS4Python",
        template_args={'course_id': 'JS4Python',
                       'login_required':'false',
                       'appname':master_app,
                       'loglevel': 10,
                       'dynamic_pages': True,
                       'course_url':master_url,
                       'use_services': 'true',
                       'python3': 'true',
                       'default_ac_lang': 'javascript',
                       'dburl': 'postgresql://bmiller@localhost/runestone',
                       'basecourse': 'JS4Python',
                       'downloads_enabled': 'false',
                       'enable_chatcodes': 'false',
                       'allow_pairs': 'false'
                        }
    )
)

version = pkg_resources.require("runestone")[0].version
options.build.template_args['runestone_version'] = version

# If DBUSER etc. are in the environment override dburl
options.build.template_args['dburl'] = get_dburl(outer=locals())

from runestone import build  # build is called implicitly by the paver driver.
